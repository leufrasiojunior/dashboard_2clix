import React from 'react'
import { ContainerModal } from './modal_style'
import { LoadingSpinner } from '../Spinner'
export default function Modal({ isOpen }) {
    if (isOpen) {
        return (
            <ContainerModal>
                <LoadingSpinner />
                <h2>
                    Aguarde. Carregando dados
                </h2>
            </ContainerModal>

        )
    }
    return null
}
