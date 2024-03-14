import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextProps} from "@ignite-ui/react/src";

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: (
            'Exemple text'
        )
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
}
