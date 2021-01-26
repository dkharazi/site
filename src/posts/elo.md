---
title: "Understanding the Glicko Rating System"
date: "2020-11-07"
tags: ["machine learning"]
draft: false
katex: true
---

In 2007, Microsoft released their [TrueSkill 1 paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2007/01/NIPS2006_0688.pdf), which essentially was a modified implentation of the Elo system. At the time, most of their games used Trueskill 1 as a player ranking system. Later on, the [Trueskill 2 paper](https://www.microsoft.com/en-us/research/publication/trueskill-2-improved-bayesian-skill-rating-system/) was released, which replaced their Trueskill 1 ranking system in most of their Xbox games, such as Halo.

Both Trueskill 1 and Trueskill 2 treat a player's ranking as a distribution, rather than a single summary statistic. To achieve this, both ranking systems use a principled Bayesian framework. As a result, the Trueskill algorithm considers the fact that all players play differently depending on their individual circumstances.

## Comparing Elo with Glicko

In 1960, the Elo system was invented and used as an improved chess-rating system. The Elo system is a method used for calculating the relative skill levels of players in zero-sum games, such as chess. At the time, the Elo system became very popular in a broad range of other sports, such as basketball and football. In 1995, the [Glicko](https://en.wikipedia.org/wiki/Glicko_rating_system) system was invented to improve the Elo system by introducing a *rate volatility* measure. Afterward, it became a popularly adopted rating system in most well-known sports. For a more detailed explanation of the Glicko system, refer to its [original paper](http://www.glicko.net/glicko/glicko.pdf).

The Trueskill rating systems borrow many ideas from Glicko, but also includes a measure of match quality between a set of players. There are a few other mathematical differences within the paper, and a few differences between the Trueskill 1 and Trueskill 2 rating systems. However, they share more similarities than differences. For the remainder of this post, I'll be focused on illustrating the intuition behind the Glicko algorithm.

$$
\text{RD} = \min(\sqrt{\text{RD}^{2}_{\text{old}} + c^{2}}, 350)
$$

As stated previously, the Glicko system extends the Elo system by computing not only a rating, which can be thought of as a *best guess* of one’s playing strength, but also a *ratings deviation* $\text{RD}$. In statistical terminology, this $\text{RD}$ term represents a standard deviation, which measures the uncertainty of a rating. Thus, a high $\text{RD}$ corresponds to an unreliable rating, or that a player roughly has only competed in a small number of tournament games. Whereas, a low $\text{RD}$ indicates the player competes frequently.

## Intuition behind Uncertainty of Rating

In the Glicko system, a player's rating only changes based on their game outcomes, but players' $\text{RD}$ changes based on their game outcomes and their time not playing. Thus, there are two features in the Glicko system that don't exist in the Elo system. First, $\text{RD}$ increases as time passes without a player competing in many games. Second, if one player’s rating increases by $x$, the opponent’s rating does not usually decrease by $x$. In the Glicko system, the amount by which the opponent’s rating decreases is governed by both players’ $\text{RD}$ terms.

To apply the rating algorithm, we treat a collection of games within a *rating period* to
have occurred simultaneously. A rating period could be as long as several months, or could
be as short as one minute. As a result, an $\text{RD}$ is calculated for each rating period, which is based on $\text{RD}_{\text{old}}$ from the previous rating period.

Here, there is a constant $c$ governing the increase in uncertainty between rating periods, which can be precisely determined by optimizing predictive accuracy of future games. Once $\text{RD}$ is computed properly, the new rating $r'$ must be updated for each player.

$$
r' = r + \frac{q}{\frac{1}{\text{RD}^{2}} + \frac{1}{d^{2}}} \sum^{m}_{j=1} g(\text{RD}_{j})(s_{j} | \text{E}(r,r_{j},\text{RD}_{j}))
$$

$$
\text{RD}' = \sqrt{\frac{1}{\frac{1}{\text{RD}^{2}} + \frac{1}{d^{2}}}}
$$

The $\text{RD}'$ term refers to the updated confidence in our own ranking after playing a bunch of players. Notice, it's basically the same as our previous $\text{RD}$, but adds a $d$ variable. Basically, the $d$ variable can be thought of as the change in uncertainty of $\text{RD}$, or how much more certain or less certain we are about our ranking. A really large $d$ (i.e. $d \to \infty$) will give us the same $\text{RD}'$, whereas a really small $d$ (i.e. $d \to 0$) will give us an $\text{RD}'$ of $0$.

Essentially, the $d$ variable really starts to shrink when we play more players, which supports the fact that if we play more players, then we'll have a low $\text{RD}$ (and vice versa). So, that is how the uncertainty is updated.

## Intuition behind Expected Ranking

The new actual ranking $r'$ is dependent on the difference between the outcome of an opponent $s$ and the expected outcome $\text{E}(s|...)$ of playing that opponent. This expected outcome will be around $0$ if a player is expected to lose, and around $1$ if a player expected to win. This difference is what really determines the update to a player's ranking.

$$
\text{E}(r,r_{j},\text{RD}_{j}) = \frac{1}{1+10^{\frac{-g(RD_{j})(r-r_{j})}{400}}}
$$

$$
d^{2} = \frac{1}{q^{2} \sum_{j=1}^{m} g(\text{RD}_{j})^{2} \times \text{E}(r,r_{j},\text{RD}_{j}) \times (1 - \text{E}(r,r_{j},\text{RD}_{j}))}
$$

If a player beats someone when he/she is expected to lose, this difference will be positive and high. Meaning, his/her new ranking will be relatively much higher. And, if a player beats someone when he/she is expected to win, this difference will be positive and low. Meaning, his/her new ranking won't change that much. However, if a player loses to someone he/she is expected to win against, this difference will be negative and large. Meaning, his/her new ranking will be relatively much lower. Lastly, if a player loses to someone he/she is expected to lose against, this difference will be negative and small. Meaning, his/her ranking won't change that much.

| $s_{j}$ | $\text{E} (s \vert ...)$ | $s_{j} - \text{E}(s \vert ...)$ |
| ------- | ------------------------ | ------------------------------- |
| win     | lose                     | $\text{much higher}$            |
| win     | win                      | $\text{not much higher}$        |
| lose    | win                      | $\text{much lower}$             |
| lose    | lose                     | $\text{not much lower}$         |

After playing a bunch of opponents, the updated ranking $r'$ is also dependent on the $g(\text{RD})$ term, which essentially is the inverse of each opponent's $\text{RD}$ term. The following formula defines this function:

$$
g(\text{RD}) = \frac{1}{\sqrt{\frac{1 + 3q^{2}\text{RD}^{2}}{\pi^{2}}}}
$$

$$
q = \frac{\ln 10}{400}
$$

Again, $g(\text{RD})$ is roughly the inverse of $\text{RD}$. Normally, a high $\text{RD}$ indicates a player's ranking is fairly uncertain. In this case, $g(\text{RD})$ outputs a high $\text{RD}$ if a player's ranking is fairly certain. Meaning, if a player has played many games, then he/she generally will have a low $\text{RD}$ and high $g(\text{RD})$. On the other hand, if a player doesn't play many games, then he/she generally will have a high $\text{RD}$ and low $g(\text{RD})$.

The inverse of $\text{RD}$ represents the certainty of a player's ranking. Mathematically, we take the inverse because we want to multiply that difference mentioned earlier based on our opponent's uncertainty. So, if an opponent's ranking is highly certain, then his/her ranking will go up even more (i.e. a multiple of the difference). If an opponent's ranking is highly uncertain, then his/her ranking won't go up by very much.

| Number of Games Player | $\text{RD}$ | $g(\text{RD})$ |
| ---------------------- | ----------- | -------------- |
| many                   | high        | low            |
| few                    | low         | high           |
