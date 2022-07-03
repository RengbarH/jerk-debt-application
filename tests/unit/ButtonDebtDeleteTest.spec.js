import {mount} from "@vue/test-utils";
import ButtonDebtDelete from "@/components/ButtonDebtDelete";

describe("ButtonDebtDelete.vue", () => {
    it("should test exists Button", () => {

        const wrapper = mount(ButtonDebtDelete)

        const cardList = wrapper.findComponent(ButtonDebtDelete)
        expect(cardList.exists()).toBeTruthy()
    })
})
