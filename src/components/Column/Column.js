import React, { useCallback, useEffect, useState } from 'react';
import './Column.scss';
import { Container, Draggable } from 'react-smooth-dnd';
import Card from 'components/Card/Card';
import { mapOrder } from 'utilities/sorts';
import { Dropdown, Form } from 'react-bootstrap';
import ConfirmModal from 'components/Common/ConfirmModal';
import { MODAL_ACTION_CONFIRM } from 'utilities/constants';
import { saveContentAfterPressEnter, selectAllInlineText } from 'utilities/contentEditable'

function Column(props) {
    const { column, onCardDrop, onUpdateColumn } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)
    const [columnTitle, setColumnTitle] = useState('')
    const handleColumnTitleChange = useCallback((e) => setColumnTitle(e.target.value), [])
    useEffect(() => {
        setColumnTitle(column.title);
    }, [column.title])
    const onConfirmModalAction = (type) => {
        console.log(type);
        if (type === MODAL_ACTION_CONFIRM) {
            const newColumn = {
                ...column,
                _destroy: true
            }
            onUpdateColumn(newColumn)
        }
        toggleShowConfirmModal();
    }

    const handleColumnTitleBlur = () => {
        console.log(columnTitle);
        const newColumn = {
            ...column,
            title: columnTitle
        }
        onUpdateColumn(newColumn)
    }

    return (
        <div className='column'>
            <header className='column-drag-handle'>
                <div className='column-title'>
                    <Form.Control
                        size="sm"
                        type="text"
                        className='hoangns-content-editable'
                        value={columnTitle}
                        onClick={selectAllInlineText}
                        onMouseDown={e => e.preventDefault()}
                        onChange={handleColumnTitleChange}
                        onBlur={handleColumnTitleBlur}
                        onKeyDown={saveContentAfterPressEnter}
                        spellCheck="false"
                    />
                </div>
                <div className='column-dropdown-actions'>
                    <Dropdown>
                        <Dropdown.Toggle className='dropdown-btn' size='sm' id="dropdown-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item >Add card...</Dropdown.Item>
                            <Dropdown.Item onClick={toggleShowConfirmModal} >Remove column...</Dropdown.Item>
                            <Dropdown.Item >Move all card in this column (beta)...</Dropdown.Item>
                            <Dropdown.Item >Move all card in this column (beta)...</Dropdown.Item>
                            <Dropdown.Item >Archive all card in this column (beta)...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </header>
            <div className='card-list'>
                <Container
                    groupName='hoangns-columns'
                    onDrop={dropResult => onCardDrop(column.id, dropResult)}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'card-drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {cards.map((card, index) => (
                        <Draggable key={index}>
                            <Card card={card} />
                        </Draggable>
                    ))}
                </Container>
            </div>
            <footer>
                <div className='footer-actions'>
                    <i className='fa fa-plus icon' />Add another card
                </div>
            </footer>
            <ConfirmModal
                show={showConfirmModal}
                onAction={onConfirmModalAction}
                title="Remove column"
                content={`Are you sure you want to remove <strong> ${column.title}! </strong> <br/>  All related cards will also be removed!`} />
        </div>
    );
}

export default Column;