const quarters = require('../../common/quarters');
const schema = require('./_schema.json')
exports.schema = schema

exports.RetakeClassIntent = function RetakeClassIntent() {
    //Extract the value of the slots
    const course = this.event.request.intent.slots.CourseAbbrev.value;

    quarters.getQuarters(course, (quarts) => {
        let speechOutput = "This class is offered at Bellevue College "
        for (let i = 0; i = quarts.length / 2; i++) {
            speechOutput += quarts.pop() + " ";
            quarts.pop();
        }
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    });
}

