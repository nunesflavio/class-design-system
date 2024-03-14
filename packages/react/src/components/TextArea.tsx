import {styled} from "../styles";
import {ComponentProps} from "react";

export const TextArea = styled('textarea', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px sloid $gray900',

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: '$regular',
    resize: 'vertical',
    minHeight: 80,


    '&:focus': {
        outline: 0,
        borderColor: 'ignite300',
    },

    '&:disabled': {
        outline: 0.5,
        cursor: 'not-allowed'
    },

    '&:placeholder': {
        color: '$gray400'
    }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}