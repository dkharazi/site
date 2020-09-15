---
title: "Jinja2"
draft: false
weight: 3
katex: true
---

### Describing Standard Filters
- Filters are operations that modify variables
- Filters are separated by a variable using the $\vert$ operator
- Multiple filters can be chained together
- The output of one filter is applied to the next
- For example, the `{{ x|join(, ) }}` uses a filter
- It joins a list $x$ with commas
- The `tojson` filter is useful for generating JavaScript on the fly:

```html
<script type=text/javascript>
    doSomethingWith({{ user.username|tojson }});
</script>
```

### Controlling Autoescaping
- Autoescaping refers to automatically escaping special characters
- Special characters in HTML refer to:
	- $\And$
	- $>$
	- $<$
	- $"$
	- $'$
- These characters carry specific meaning in documents
- Therefore, they need to be replaced by entities for displaying them as text

### References
- [Basics of Templates in Flask](https://flask.palletsprojects.com/en/1.1.x/tutorial/templates/)
- [Details about Templating in Flask](https://flask.palletsprojects.com/en/1.1.x/templating/)
- [Filtering in Jinja2](https://jinja.palletsprojects.com/en/2.11.x/templates/#filters)
- [Defining Autoescaping in Templates](https://stackoverflow.com/a/35444830/12777044)
