import React, { useEffect, useRef } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Context from './Context';
import Context2 from './Context2';

const ParentContext = () => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        wrapperRef.current.animate(
            [{ backgroundColor: '#f0ffbb' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h1>Parent</h1>
            <Child1>
                <Child2>
                    <Context />
                    <Context2 />
                </Child2>
            </Child1>
            <span>
                Context가 전송하는 value 데이터는 객체 형태이다. Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔 때마다 다시 렌더링 됩니다.
            </span>
            <p>해결 방법</p>
            <ol>
                <li>Context를 쪼개서 여러 개 사용</li>
                <li>필요한 값만 memoization 등</li>
            </ol>
        </section>
    );
};

export default ParentContext;
