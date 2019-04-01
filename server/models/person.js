'use strict';

module.exports = function(Person) {
    Person.greet = (msg) => {
        return Promise.resolve({
            message: msg,
            arrayMessage: [
                'gusto',
                'ko',
                'maraming',
                'message',
            ],
            numberMessage: 5,
        });
    }
  
    Person.remoteMethod('greet', {
        // /api/dev/monica
        // /api/dev/eloy
        // /api/dev/:name/status
        http: {path: '/say/:msg', verb: 'GET'},
        accepts: [
            {arg: 'msg', type: 'string', http: {source: 'path'}},
        ],
        returns: {root: true, type: 'Object'}
    });

    Person.passTheMessage = (msgBody) => {
        return Promise.resolve({
            message: `Hi ${msgBody.to} from ${msgBody.from}`,
        });
    };

    Person.remoteMethod('passTheMessage', {
        //pwede PUT, pwedeng DELETE
        http: {path: '/say', verb: 'POST'},
        accepts: [
            {arg: 'msgBody', type: 'Object', http: {source: 'body'}},
        ],
        returns: {root: true, type: 'Object'}
    });
};
