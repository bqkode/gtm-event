'use strict';

var assert  = require('assert'),
    expect  = require("chai").expect,
    jsdom   = require('mocha-jsdom'),
    GTM     = require('../');


describe("Event", function() {
    jsdom();

    it("Fails when Category is undefined", function() {
        expect( GTM.event() ).to.equal(false);
    });

    it("Fails when Action is undefined", function() {
        expect( GTM.event('category') ).to.equal(false);
    });

    it("Succeed when Category and Action is defined", function() {
        expect( GTM.event('category', 'action') ).to.equal(true);
    });

    it("Fail when category is number", function() {
        expect( GTM.event(123, 'action', 'label', 0) ).to.equal(false);
    });

    it("Fail when action is number", function() {
        expect( GTM.event('category', 123, 'label', 0) ).to.equal(false);
    });

    it("Fail when label is number", function() {
        expect( GTM.event('category', 'action', 123, 0) ).to.equal(false);
    });

    it("Fail when value is string", function() {
        expect( GTM.event('category', 'action', 'label', '123') ).to.equal(false);
    });

    it("Succeed when all params are defined", function() {
        expect( GTM.event('category', 'action', 'label', 0) ).to.equal(true);
    });
});


describe("Virtual pageview", function() {
    jsdom();

    it("Fail if path is undefined", function() {
        expect( GTM.virtualPageview() ).to.equal(false);
    });

    it("Fail if path is number", function() {
        expect( GTM.virtualPageview(123) ).to.equal(false);
    });

    it("Fail if path is object", function() {
        expect( GTM.virtualPageview({key: 'value'}) ).to.equal(false);
    });

    it("Fail if path is array", function() {
        expect( GTM.virtualPageview([1,2,3]) ).to.equal(false);
    });

    it("Succeed if path is string", function() {
        expect( GTM.virtualPageview('my/path') ).to.equal(true);
    });

    it("Fail if path is empty string", function() {
        expect( GTM.virtualPageview('') ).to.equal(false);
    });

});