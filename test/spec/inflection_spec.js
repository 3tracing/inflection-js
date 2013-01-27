define(['src/inflection'], function(InflectionJS) {

    describe('InflectionJS', function() {

        var inflection = InflectionJS;

        it('should capitalize a string', function() {
            expect(inflection.capitalize('rails')).toEqual('Rails');
        });

        it('should pluralize a string', function() {
            var p = [],
                r = [],
                s = [
                'person', 'man', 'woman', 'child', 'sex', 'move', 'Person', 'Man', 'Woman', 'Child',
                'Sex', 'Move', 'equipment', 'information', 'rice', 'money', 'species', 'series',
                'fish', 'sheep', 'deer', 'Equipment', 'Information', 'Rice', 'Money', 'Species',
                'Series', 'Fish', 'Sheep', 'Deer', 'octopus', 'wolf', 'potato', 'fool', 'blue',
                'bus', 'student', 'tuna', 'Octopus', 'Wolf', 'Potato', 'Fool', 'Blue', 'Bus',
                'Student', 'Tuna', 'news', 'News', 'mouse', 'Mouse', 'information', 'Information',
                'ox', 'Ox', 'virus', 'Virus', 'archive', 'Archive', 'louse', 'Louse', 'curve', 'Curve'
            ];
            for (var i = 0, len = s.length; i < len; i++) {
                p[i] = inflection.pluralize(s[i]);
                expect(s[i]).toEqual(inflection.singularize(p[i]));
            }
        });

        it('should underscore a string', function() {
            expect(inflection.underscore('ActiveRecord')).toEqual('active_record');
        });

        it("should signularize a string", function() {
            expect(InflectionJS.singularize("people")).toEqual("person");
            expect(InflectionJS.singularize("octopi")).toEqual("octopus");
            expect(InflectionJS.singularize("Hats")).toEqual("Hat");
            expect(InflectionJS.singularize("guys")).toEqual("guy");
        });

        it("should camelize a string", function() {
            expect(InflectionJS.camelize("message_properties")).toEqual("MessageProperties");
            expect(InflectionJS.camelize("message_properties", true)).toEqual("messageProperties");
        });

        it("should underscore a string", function() {
            expect(InflectionJS.underscore("MessageProperties")).toEqual("message_properties");
            expect(InflectionJS.underscore("messageProperties")).toEqual("message_properties");
        });

        it("should humanize a string", function() {
            expect(InflectionJS.humanize("message_properties")).toEqual("Message properties");
            expect(InflectionJS.humanize("message_properties", true)).toEqual("message properties");
        });

        it("should capitalize a string", function() {
            expect(InflectionJS.capitalize("message_properties")).toEqual("Message_properties");
        });

        it("should dasherize a string", function() {
            expect(InflectionJS.dasherize("message_properties")).toEqual("message-properties");
            expect(InflectionJS.dasherize("Message Properties")).toEqual("Message-Properties");
        });

        it("should titleize a string", function() {
            expect(InflectionJS.titleize("message_properties")).toEqual("Message Properties");
            expect(InflectionJS.titleize("message properties to keep")).toEqual("Message Properties to Keep");
        });

        it("should demodulize a string", function() {
            expect(InflectionJS.demodulize("Message::Bus::Properties")).toEqual("Properties");
        });

        it("should tableize a string", function() {
            expect(InflectionJS.tableize("MessageBusProperty")).toEqual("message_bus_properties");
        });

        it("should classify a string", function() {
            expect(InflectionJS.classify("message_bus_properties")).toEqual("MessageBusProperty");
        });

        it("should convert a string to a foreign key", function() {
            expect(InflectionJS.foreign_key("MessageBusProperty")).toEqual("message_bus_property_id");
            expect(InflectionJS.foreign_key("MessageBusProperty", true)).toEqual("message_bus_propertyid");
        });

    });
});