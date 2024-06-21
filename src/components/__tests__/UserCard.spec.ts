import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserCard from "../UserCard.vue";

describe('UserCard', () => {
    it('renders properly', () => {
        const wrapper = mount(UserCard, { props: { name: 'Ann', email: 'test@gmail.com' } })
        expect(wrapper.text()).toContain('Ann')
        expect(wrapper.text()).toContain('test@gmail.com')
    })
})