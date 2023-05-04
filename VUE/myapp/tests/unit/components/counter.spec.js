import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
describe("Counter Component", () => {
  test("Debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(Counter);

    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div>
        <h2>Counter</h2><label for="elevacion">Ingresa el numero de elevacion </label><input id="elevacion" type="text">
        <p>0 <sup>0</sup> = 0</p><button>Ingrementar numero base</button>
        <result-stub result="0"></result-stub>
      </div>
    `);
  });
});
