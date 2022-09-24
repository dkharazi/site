---
title: "Stock Valuation"
draft: false
weight: 2
katex: true
---

### Introducing Methods for Stock Valuation
- Generally, there are two types of stock valuation models:
    - Income valuation
    - Relative valuation
- The most popular method for income valuation is *discounted cash flow analysis* (DCF)
    - DCF involves discounting the future profits of a stock
        - These profits can include the following:
            - Dividends
            - Earnings
            - Cash flows
    - The discounted rate normally includes a *risk premium*
        - This is commonly based on the capital asset pricing model
- Possibly, the most common method for relative valuation is the *Price to earnings ratio* (P/E ratio)
    - This method is based on historic ratios
    - It measures a stock's value based on measurable attributes
- Income valuation is what financial analysts use to justify stock prices 
- Relative valuation is what drives long-term stock prices

### Defining Metrics used in Stock Valuation
- The following are useful quantitative metrics for relative valuation:
    - P/E ratio
    - P/B ratio
    - D/E ratio
    - Gross Profit Margins
    - Return on invested capital (ROIC)
    - Return on assets (ROA)
    - Total addressable market (TAM)
    - Liquidity ratio
    - R/D expenses
    - Retained earnings
    - Retained earnings to market value
    - Insider ownership
- The following are useful qualitative metrics for relative valuation:
    - Earnings comparison to other companies in the industry
    - Quality of CEO

### Defining a Price to Earnings Ratio
- Intuitively, a P/E ratio represents how a stock's current price compares to its current earnings per share (EPS)
- Note, it doesn’t consider future earnings or growth (or lack of growth)
- The EPS represents how a company's net income compares to the number of available shares of stock
    - Generally, a higher EPS is better
- A lower P/E ratio is better
    - Roughly, a P/E ratio $< 16$ is ideal

$$
\text{EPS} = \frac{\text{Net Income}}{\text{Common Stock}}
$$

$$
\text{P/E Ratio} = \frac{\text{Stock Price}}{\text{EPS}}
$$

### Defining a Price to Book Value Ratio
- Intuitively, a P/B ratio represents how a stock's current price compares to its current ownership per share
- Note, it doesn't consider future ownership or growth (or lack of growth)
- The book value represents how a company's equity compares to the number of available shares of a stock
- Generally, a lower P/B ratio is better
    - Roughly, a P/B ratio $< 1$ is ideal

$$
\text{BPS} = \frac{\text{Equity}}{\text{Common Stock}}
$$

$$
\text{P/B Ratio} = \frac{\text{Stock Price}}{\text{BPS}}
$$

### Defining a D/E Ratio
- Intuitively, a D/E ratio represents how a stock's current debt compares to its current ownership
- Note, it doesn't consider future debts or future ownership
- Generally, a lower D/E ratio is better
    - Roughly, a D/E ratio $< 2$ is ideal

$$
\text{D/E Ratio} = \frac{\text{Total Debts}}{\text{Total Equity}}
$$

### Defining Gross Profit Margins
- Intuitively, gross profit margins represent how a company's profits compare to its total revenue
- It's used to find whether the product is practical and worth producing
- Note, it doesn't consider future profits or future revenue
- Generally, higher profit margins are better
- A good margin will vary considerably by industry

$$
\text{Gross Profit} = \text{Revenue } - \text{ COGS}
$$

$$
\text{Gross Profit Margin} = \frac{\text{Gross Profit}}{\text{Revenue}}
$$

### Defining Return on Invested Capital
- Intuitively, return on invested capital (ROIC) represents how effective a company reinvests in itself
- Specifically, it represents how a company's income (after major expenses) compares to its invested capital
- EBITDA is a company's income after major expenses
- EBIT is a company's income after major expenses and depreciation
- Invested capital is a company's long-term liabilities and equity

$$
\text{EBITDA} = \text{Revenue } - \text{ COGS } - \text{ Operating Expenses}
$$

$$
\text{EBIT} = \text{EBITDA } - \text{ Depreciation } - \text{ Amortization}
$$

$$
\text{Invested Capital} = \text{Assets } - \text{ Current Liabilities}
$$

$$
\text{ROIC} = \frac{\text{EBIT}}{\text{Invested Capital}}
$$

### Defining Return on Assets
- Intuitively, return on assets (ROA) represents how effective a company generates profits using its existing assets
- Specifically, it represents how a company's income (after major expenses) compares to its total assets
- EBITDA is a company's income after major expenses
- EBIT is a company's income after major expenses and depreciation

$$
\text{EBITDA} = \text{Revenue } - \text{ COGS } - \text{ Operating Expenses}
$$

$$
\text{EBIT} = \text{EBITDA } - \text{ Depreciation } - \text{ Amortization}
$$

$$
\text{ROA} = \frac{\text{EBIT}}{\text{Assets}}
$$

### Defining Total Addressable Market
- Intuitively, total addressable market (TAM) represents the market size
- Specifically, it's the total possible demand for the product
- On the other hand, serviceable available market (SAM) is the portion of TAM targeted and served by a company's product
- Lastly, serviceable obtainable market (SOM) is the share of market
    - It's the percentage of SAM which is realistically reached

### Defining Liquidity Ratio
- Intuitively, liquidity ratio represents how many resources a company has to meet its short-term obligations
- Roughly, it represents how much of the short-term liabilities are covered by cash
- Generally, higher liquidity ratios are better
    - If the ratio is $> 1$, then the company is fully covered

$$
\text{Liquidity Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}
$$

### Defining Retained Earnings
- Intuitively, retained earnings represent how much a company reinvests in itself
- Generally, retained earnings is just the net income remaining after a company pays its expenses and dividends to its shareholders
- Retained earnings can contribute to the following:
    - Paying down debt
    - Expanding operations
    - Other reasons
- Another relevant measure is *retained earnings to market value*
    - This represents how successful a company has been in utilizing their retained money
    - This measures how effective a company's retained earnings are contributing to the growth of the company
    - This is calculated over a period of time

$$
\text{Retained Earnings to Market Value} = \frac{p_{t} - p_{t-1} - ... - p_{t-k}}{e_{t} + e_{t-1} + ... + e_{t-k}}
$$

- Here, $p_{t}$ represents the price for a $t^{th}$ year
- Whereas, $e_{t}$ represents the earnings for a $t^{th}$ year

### Describing Insider Ownership
- Intuitively, insider ownership represents how many insiders are selling compared to buying at a company
- Generally, insiders buy shares only because they believe the company is undervalued
- Key executives (i.e. CEO, CFO, or directors) buying their company's stock could indicate growth
    - However, most companies today require newly appointed executives to own shares
    - Thus, the following are a few exceptions to this rule:
        - Newly appointed executives and directors buying shares
        - Insider executives exercising stock options by buying stock
        - Many other specific reasons
- Note, one or two insiders aren’t important, whereas many is better
- Ideally, the buy/sell ratio should be around $1\%$

### Bill Ackman's Keys to Successful Investing
- Invest in public companies
- Understand how the company makes money
- Invest at a reasonable price
- Invest in a company that could last forever
    - Product is inelastic
    - Product is unique
    - Product is established
- Find a company with limited debt
- Look for high barriers to entry
- Invest in a company immune to extrinsic factors
- Invest in a company with low reinvestment costs
- Avoid businesses with controlling shareholders

### References
- [Wiki about Methods of Stock Valuation](https://en.wikipedia.org/wiki/Stock_valuation)
- [Wiki about Total Addressable Market](https://en.wikipedia.org/wiki/Total_addressable_market)
- [Wiki about Liquidity Ratio](https://en.wikipedia.org/wiki/Liquidity_ratio)
- [Article about Retained Earnings](https://www.investopedia.com/terms/r/retainedearnings.asp)