// Require modules
var tv_agents = require('./tvs.json').tvs;

var _getAgent = function( req ){
	var _ua = req.headers['user-agent'];
	_checkAgent( _ua );
}

var _checkAgent = function( userAgent ){
	if( tv_agents.indexOf( userAgent ) > -1 ){
		return true;
	} else{
		return false;
	}
}

module.exports = {
	checkAgent: _checkAgent,
	check: _getAgent
}