import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxWidth: 600,
    margin: 'auto', 
    marginTop: '4%',
  },
  headerCell: {
    fontWeight: 'bold', 
  },
});

const BusinessUnitList = () => {
  const classes = useStyles();
  const initialItems = [
    { id: 1, item1: 'Value 1', item2: 'Value 2' },
    { id: 2, item1: 'Value 3', item2: 'Value 4' },
  ];

  const [items, setItems] = useState(initialItems);
  const [editedItems, setEditedItems] = useState([]);

  const handleEdit = (id, field, value) => {
    const editedItemIndex = editedItems.findIndex(item => item.id === id);
    if (editedItemIndex !== -1) {
      const newEditedItems = [...editedItems];
      newEditedItems[editedItemIndex][field] = value;
      setEditedItems(newEditedItems);
    } else {
      setEditedItems([...editedItems, { id, [field]: value }]);
    }
  };

  const handleSave = () => {
    const updatedItems = items.map(item => {
      const editedItem = editedItems.find(eItem => eItem.id === item.id);
      return editedItem ? { ...item, ...editedItem } : item;
    });
    setItems(updatedItems);
    setEditedItems([]);
  };

  return (
    <div>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell}>Notation</TableCell>
              <TableCell className={classes.headerCell}>Business Unit</TableCell>
              <TableCell className={classes.headerCell}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell contentEditable={true} onBlur={(e) => handleEdit(item.id, 'item1', e.target.innerText)}>{item.item1}</TableCell>
                <TableCell contentEditable={true} onBlur={(e) => handleEdit(item.id, 'item2', e.target.innerText)}>{item.item2}</TableCell>
                <TableCell>
                  <Button onClick={() => handleSave()} variant="contained" color="primary">
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BusinessUnitList;
