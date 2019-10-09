import {
  virtpet
} from "../src/VirtPet";
describe("The Pet", function () {
  let cactuardo = new virtpet();
  beforeEach(function () {
  });
  afterEach(function () {
  });
  it("will initialize properly", function () {
    expect(cactuardo.name).toBe("cactuardo");
    expect(cactuardo.difficulty).toBe(1);
    expect(cactuardo.level).toBe(1);
  });
  it("Can work", function () {
    jasmine.clock().install();
    jasmine.clock().mockDate();
    cactuardo.ToggleWork();
    jasmine.clock().tick(6000000);
    jasmine.clock().uninstall();
    

    console.log(cactuardo.working);
    console.log(cactuardo);
    console.log(cactuardo.totalworktime);
    expect(cactuardo.totalworktime).toBeGreaterThan(0);
  });

});