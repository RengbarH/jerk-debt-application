import { mount } from "@vue/test-utils";
import JerkSingle from "@/components/JerkSingle";
import JerkView from "@/views/JerkView";


describe("JerkView.vue", () => {
  it("should show page title", () => {
    const wrapper = mount(JerkView);

    expect(wrapper.text()).toMatch("jerk");
  });

  it("should create from component", () => {
    const wrapper = mount(JerkView);

    const createForm = wrapper.findComponent(JerkSingle);
    expect(!createForm.exists()).toBeTruthy();
  });

  it("should ", () => {
    const testPerson = [{
      id: 1,
      firstName: 'Max',
      lastName: 'Mustermann',
      gender: 'MALE'
    }]
    const wrapper = mount(JerkView,{
      propsData: {
        jerks: testPerson
      }
    })
    const cardTitle = wrapper.find('jerk')
    expect(cardTitle.exists())
  });
})
