import {Check} from "phosphor-react";
import {CkeckboxContainer, CkeckboxIndicator} from "./styles";
import React, {ComponentProps} from "react";

export interface CheckboxProps extends ComponentProps<typeof CkeckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
    return (
        <CkeckboxContainer {...props}>
            <CkeckboxIndicator asChild>
                <Check weight="bold" />

            </CkeckboxIndicator>
        </CkeckboxContainer>
    )
}

Checkbox.displayName = 'Checkbox'