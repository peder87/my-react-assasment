import { useState } from "react"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { AddContainer } from "../addUser/container";

interface ModalContainerProps {
  backHome: boolean
  userId: string
  parentId: string|undefined
}

export const ModalContainer = (p:ModalContainerProps) => {
  const [modalId, setModalId] = useState<string>('')
  const open = (parentId:string) => {
    setModalId(parentId)
  }
  const closeDialog = () => {
    setModalId('')
  }
  return (
    <>
      <AddContainer
        showBackHome={p.backHome}
        userId={p.userId}
        parentId={p.parentId}
        openDialog={open}
      />
      {
      <Dialog isOpen={modalId !== ''} onDismiss={closeDialog}>
        <ModalContainer
          userId={modalId}
          parentId={p.userId}
          backHome={false}
        />
      </Dialog>
      }
    </>
  )
} 