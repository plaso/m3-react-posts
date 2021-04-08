import React from 'react';
import useCounter from '../hooks/useCounter';

const Foo = () => {
  const { counter } = useCounter()

  return (
    <div>
      Foo: { counter }
    </div>
  );
};

export default Foo;