import * as React from 'react';

interface Props {
    text: string;
    done: boolean;
    onToggle(): void;
    onRemove(): void;
}

// SFC StatelessFunctionComponent
const TodoItem: React.SFC<Props> = ({text, done, onToggle, onRemove}) => (
    <li>
        <b
            onClick={onToggle}
            style={{
                textDecoration: done ? 'line-through' : 'none'
            }}
        >
        {text}
        </b>
        <button onClick={onRemove} style={{all: 'unset' , marginLeft: '0.5rem'}}>[지우기]</button>
    </li>
);

export default TodoItem;