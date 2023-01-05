import React from 'react';
import { Button, Modal } from 'antd';

export default () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <div>
      <Modal open>
        <Button
          onClick={() => {
            modal.confirm({ title: 'Welcome to our useful page (Mr Shavkat)' });
          }}
        >
          Subscribe me
        </Button>

        {}
        {contextHolder}
      </Modal>

      {}
      {}
    </div>
  );
};