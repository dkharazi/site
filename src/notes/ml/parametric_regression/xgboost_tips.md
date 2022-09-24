---
title: "XGBoost Tips"
draft: false
weight: 7
katex: true
---

### Getting Best Booster
- The best tree will be the final tree
- The main difference between RF and GB is how the trees are trained
    - Inference is roughly the same, gathering estimates from each tree to come up with a final prediction
    - RF training starts with a new tree when producing a new tree (i.e. bagging)
    - GB training creates a new tree based on previous tree (i.e. boosting)
- Each boosted tree will be weighted and aggregated to come up with a final prediction for an observation
    - Each boosted tree is given the same weight `eta` when making a final prediction
    - The final prediction is the sum of each tree's prediction multiplied by a constant weight `eta`


```python
best_iteration = model.get_booster().best_ntree_limit
num_trees = len(model.get_booster().get_dump())
print('Best iteration:', best_iteration)
print('Num iterations:', num_trees)
```

### Displaying Decision Rules for Individual Trees
- Decision rules of individual trees can be visualized and printed
- To visualize decision rules of an individual tree, use the `xgb.plot_tree` function
    - If image is blurry, increase clarity by increasing `figsize` parameter
    - Specify individual tree using the `num_trees` parameter
- To print decision rules of all trees, use the `dump_model` function
    - For more details about the decision rules (e.g. coverage), set `with_stats` parameter to True
    - Decision rules and any statistics will be outputted to a file
- To analyze decision rules, gains, and other statistics, use the `trees_to_dataframe` function

```python
# Plot decision rules of 5th tree
# Increase fig size to make plot more clear
fig, ax = plt.subplots(figsize=(40, 40))
xgb.plot_tree(model, num_trees=5, fontsize=20, ax=ax)
plt.show()

# Print decision rules of every tree
model.get_booster().dump_model('./xgb_model.txt', with_stats=True)
with open('./xgb_model.txt', 'r') as f:
    txt_model = f.read()
print(txt_model)

# Output decision rules and gains to dataframe
temp_df = model.get_booster().trees_to_dataframe()
temp_df[temp_df['Tree'] == 0]
```

### Analyzing Different Feature Importances
- Weight refers to the number of times a feature is used in a splitting criteria
    - This could include splitting of just $1$ outlier observation
    - Weight will count a feature twice if that feature is used as two separate decision rules in a single tree
- Gain refers to the accuracy gain by including the feature
    - Includes more balanced splits in terms of coverage, so less prone to generating higher gains if filtering out a single outlier observation
    - But, these features aren't necessarily present in a lot of trees
- Cover refers to number of observations involved in decision rules across all trees
    - Doesn't look at features included very often throughout the trees
    - Can be impacted by splits only accounting for outliers

```python
# gain:
# - includes more balanced splits in terms of coverage
# - but aren't necessarily present in a lot of trees
# weight:
# - includes splits accounting for outliers
# - but are features that included very often
# cover:
# - doesn't look at features included very often
# - and includes splits accounting for outliers
xgb.plot_importance(model, max_num_features=10, importance_type='gain')
```

### References
- [Blog Post about XGBoost Algorithm](https://medium.com/analytics-vidhya/what-makes-xgboost-so-extreme-e1544a4433bb)
- [Video about XGBoost for Regression](https://www.youtube.com/watch?v=OtD8wVaFm6E)
- [Post about Accessing Weights of Individual Trees](https://stackoverflow.com/a/34331573/12777044)
- [Post about Different Options of Feature Importances](https://stats.stackexchange.com/a/397050/278990)