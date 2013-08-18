module.exports = RooleError;

function RooleError(msg, node) {
	this.message = msg;
	this.loc = node.loc;
}

RooleError.prototype = Object.create(Error.prototype);
RooleError.prototype.constructor = RooleError;
RooleError.prototype.name = 'RooleError';