---
title: "Elasticsearch"
draft: false
weight: 7
katex: true
---

### Summarizing Elasticsearch
- An index in ElasticSearch is similar to a database
    - An index is similar to a database in RDBMS
    - An index holds documents (i.e., JSON), where documents are similar to columns/values in RDBMS
    - Documents are grouped into types, which are similar to tables in RDBMs
    - Each document is similar to columns/values in RDBMS tables
- Documents can be created and added once an index is created
- [A user can search documents in an index with a query](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-your-data.html)
    - A query will match documents with a given value
- [Text fields are stored in inverted indices, whereas geo fields are stored in BKD trees](https://www.elastic.co/blog/what-is-an-elasticsearch-index)
    - An inverted index is a data structure that stores every unique word that appears in any document and a list of documents that word is found in

### References
- [Video with Example of Creating Indices](https://www.youtube.com/watch?v=p9_XIbJb2Rc&ab_channel=Thetips4you)
- [SO Post about Indices in ElasticSearch](https://stackoverflow.com/questions/15025876/what-is-an-index-in-elasticsearch/15026433#15026433)
- [ElasticSearch Documentation describing ElasticSearch](https://www.elastic.co/blog/what-is-an-elasticsearch-index)