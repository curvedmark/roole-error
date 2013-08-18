# roole-error

Roole error objects

## Installation

	npm install roole-error;

## Example

```javascript
var RooleError = require('roole-error');
throw new RooleError('message', node);
```

The created error object will contain a `loc` property which comes from `node.loc`.