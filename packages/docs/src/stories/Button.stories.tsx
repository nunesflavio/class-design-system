import type {Meta, StoryObj} from '@storybook/react';
import {Button, ButtonProps} from "@ignite-ui/react/src";
import {ArrowArcRight} from "phosphor-react";

export default {
    title: 'Form/Button',
    component: Button,

    args: {
        children: (
            'Send'
        )
    }

} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {

}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create New',
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',

    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Proximo passo
                <ArrowArcRight weight="bold"/>
            </>
        )
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    }
}
