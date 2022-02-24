import { useState } from "react"
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { AddContainer } from "../addUser/container";
import { Confirm } from "../confirm/confirm";
import { TempUser } from "../../actions/temp";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../actions/thunk";

interface ModalContainerProps {
  backHome: boolean
  userId: string
  parentId: string|undefined
  closeDialog:() => void
}

export const ModalContainer = (p:ModalContainerProps) => {
  const dispatch = useDispatch()
  const [modalId, setModalId] = useState('')
  const [showConfirm, setShowConfirm] = useState(false)
  
  const open = (parentId:string) => {
    setModalId(parentId)
  }

  const closeAll = () => {
    setModalId('')
  }

  const closeDialog = () => {
    setShowConfirm(true)
  }

  const save = (user: TempUser) => {
    dispatch(updateUserThunk(user))
    closeAll()
  }

  const closeAlert = () => setShowConfirm(false)
  return (
    <>
      <AddContainer
        showBackHome={p.backHome}
        userId={p.userId}
        parentId={p.parentId}
        openDialog={open}
        closeDialog={p.closeDialog}
      />
      <Dialog isOpen={modalId !== ''} onDismiss={closeDialog} style={{width:'70vw', height: '70vh'}} aria-label="dialog">
        {!showConfirm ? <ModalContainer
          userId={modalId}
          parentId={p.userId}
          backHome={false}
          closeDialog={closeAll}
          /> : <Confirm currentId={modalId} dismissAlert={closeAlert} abort={closeAll} save={save}/>
         }
      </Dialog>
    </>
  )
} 