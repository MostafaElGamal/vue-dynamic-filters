import { shallowMount } from "@vue/test-utils";
import vueFilter from "../../src/vue-filter";
import filters from "../../src/filters.js";

describe("vue-filter", () => {
  let vueFilterWrapper, filter;
  filter = {};
  beforeEach(() => {
    vueFilterWrapper = shallowMount(vueFilter, {
      propsData: { filters, value: filter },
    });
  });

  it("check if search sent the data to the props value", () => {
    vueFilterWrapper.vm.sentSearch("search");
    expect(filter.search).toMatch("search");
  });
  it("check if price sent the data to the props value", () => {
    let priceValue = { min: 10, max: 15 };
    vueFilterWrapper.vm.sentPrice(priceValue);
    expect(filter.min).toBe(priceValue.min);
    expect(filter.max).toBe(priceValue.max);
  });
  it("check if checkbox sent the data to the props value", () => {
    const checkboxValues = [1, 2, 3];
    vueFilterWrapper.vm.sentCheckbox(1);
    vueFilterWrapper.vm.sentCheckbox(2);
    vueFilterWrapper.vm.sentCheckbox(3);
    expect(filter.checkbox).toEqual(checkboxValues);
  });
});
