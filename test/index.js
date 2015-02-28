var should = require('chai').should();
var tvCheck = require('../index.js');
var checkAgent = tvCheck.checkAgent;

var desktop_r_obj = {
	"headers": {
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"	
	}
}

describe('##Check', function() {
	it('checks', function(){
		tvCheck.check( desktop_r_obj );
	})
});