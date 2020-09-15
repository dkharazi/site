---
title: "Views"
draft: false
weight: 7
katex: true
---

### Describing Pluggable Views
- Pluggable views are inspired by the generic views from Django
- They are used to replace parts of implementations
- Let's use this function as an example:

```python
>>> @app.route('/users/')
... def show_users(page):
...     users = User.query.all()
...     return render_template('users.html', users=users)
```

- And convert it into a customizable view:

```python
>>> from flask.views import View

>>> class ListView(View):
...     def get_template_name(self):
...         raise NotImplementedError()
...     def dispatch_request(self):
...         context = {'objects': self.get_objects()}
...         return render_template(context) 

>>> class UserView(ListView):
...     def get_template_name(self):
...         return 'users.html'
...     def get_objects(self):
...         return User.query.all()
```

### Method Based Dispatching
- Executing a different function for each HTTP method is useful for RESTful APIs
- We can do this with `flask.views.MethodView`
- Each HTTP method maps to a function with the same name
- As a result, we don't need to provide the `methods` attribute
- The following is an example:

```python
>>> from flask.views import MethodView

>>> class UserAPI(MethodView):
...     def get(self):
...         users = User.query.all()
...     def post(self):
...         user = User.from_form_data(request.form)

>>> api_func = UserAPI.as_view('users')
>>> app.add_url_rule('/users/', view_func=api_func)
```

### Method Views for APIs
- Suppose we're exposing a user object on the web
- Then, we want the user to inherit the following behavior:

| **URL**       | **Method** | **Description**           |
| ------------- | ---------- | ------------------------- |
| `/users/`     | `GET`      | Gives a list of all users |
| `/users/`     | `POST`     | Creates a new user        |
| `/users/<id>` | `GET`      | Shows a single user       |
| `/users/<id>` | `PUT`      | Updates a single user     |
| `/users/<id>` | `DELETE`   | Deletes a single user     |

- We could do this nicely using `MethodView`
- The following is an example:

```python
>>> class UserAPI(MethodView):
>>>     def get(self, user_id):
...         if user_id is None:
...             # return a list of users
...             pass
...         else:
...             # expose a single user
...             pass
...      def post(self):
...          # create a new user
...          pass
...      def delete(self, user_id):
...          # delete a single user
...          pass
...      def put(self, user_id):
...          # update a single user
...          pass
```

- Now, the routing system can be set up like:

```python
>>> user_view = UserAPI.as_view('user_api')

>>> # GET behavior
>>> app.add_url_rule('/users/',
...                  defaults={'user_id': None},
...                  view_func=user_view,
...                  methods=['GET',])

>>> # POST behavior
>>> app.add_url_rule('/users/',
...                  view_func=user_view,
...                  methods=['POST',])

>>> # Other behavior
>>> app.add_url_rule('/users/<int:user_id>',
...                  view_func=user_view,
...                  methods=['GET', 'PUT', 'DELETE'])
```

### References
- [Details about Pluggable Views in Flask](https://flask.palletsprojects.com/en/1.1.x/views/)
