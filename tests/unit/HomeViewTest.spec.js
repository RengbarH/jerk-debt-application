import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView";


describe("HomeView.vue", () => {
    it("should show page title", () => {
        const wrapper = mount(HomeView);

        expect(wrapper.text()).toMatch("Die aktuellen Jerks");
    });

    it("should create from component", () => {
        const wrapper = mount(HomeView);

        const createForm = wrapper.findComponent(HomeView);
        expect(createForm.exists()).toBeTruthy();
    });

    it("should create testPerson and test exists ", () => {
        const testPerson = [{
            id: 1,
            firstName: 'Max',
            lastName: 'Mustermann',
            gender: 'MALE'
        }]
        const wrapper = mount(HomeView,{
            propsData: {
                jerks: testPerson
            }
        })
        const cardTitle = wrapper.find('jerk')
        expect(cardTitle.exists())
    });
})
