import React from 'react'
import Modal from '../../components/LoagingComponent/modal'
import { useState } from 'react';

function TestSpinner() {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <Modal isOpen={openModal} />
        </>
    )
}

export default TestSpinner