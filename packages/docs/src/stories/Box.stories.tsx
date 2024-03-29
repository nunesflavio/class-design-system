import type {Meta, StoryObj} from '@storybook/react';
import {Box, BoxProps, Text} from "@ignite-ui/react/src";

export default {
    title: 'Surfaces/Box',
    component: Box,

    args: {
        children: (
                <Text>Testeando elemento Box</Text>
        )
    },
    argTypes: {
        children: {
            control: {
                type: null,
            },
        },
    },

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
