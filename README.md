# js-literate-request

A simple library for network queries.

  - Clean JavaScript, without fraemworks
  - Get, Post, JSON request
  - Test on JEST
  - TypeScript
  - 1,6kb
  - Magic

### Examples

Include js script:

```sh
<script src="dist/main.bundle.js"></script>
```

Get:

```sh
$.req.get({
    url: 'http://localhost/inf.html',
        success: function (response) {
          console.log(response);
        },
        error: function () {
          console.log("Was failed");
        }
    })
```

Json:

```sh
$.req.json({
    url: 'http://localhost/config.json',
        success: function (response) {
          console.log(response.name);
        }
    })
```

Post:

```sh
$.req.post({
    url: 'http://localhost/inf.html',
        data: "Hello",
        success: function (response) {
          console.log(response);
        },
        error: function () {
          console.log("Was failed");
        }
    })
```