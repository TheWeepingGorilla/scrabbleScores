describe("letterScore", function() {
  it("returns 1 if given the letter a", function () {
    letterScore("a").should.equal(1);
  });

  it("returns 10 if given the letter z", function () {
      letterScore("z").should.equal(10);
    });
});

describe("wordScore", function() {
  it("returns 4 if given the word rad", function () {
    wordScore("rad").should.equal(4);
  });
  it("returns 19 if given the word zygote", function () {
    wordScore("zygote").should.equal(19);
  });

});

