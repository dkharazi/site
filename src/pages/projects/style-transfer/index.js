import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import StyleLayout from '../../../components/style-transfer/StyleLayout';
import InputCard from '../../../components/style-transfer/InputCard';
import OutputCard from '../../../components/style-transfer/OutputCard';
import images from '../../../data/style-transfer/images';
import * as layoutStyles from '../../../styles/style-transfer/layout.module.css';


const StyleTransfer = () => {

  // Define state variables
  const [contentImg, setContentImg] = useState(images.content[0]);
  const [styleImg, setStyleImg] = useState(images.style[0]);
  const [newImg, setNewImg] = useState(images.gen[0]);
  const [openContentModal, setOpenContentModal] = useState(false);
  const [openStyleModal, setOpenStyleModal] = useState(false);

  // Handle the side effect of a style or content card changing
  useEffect(() => {
    setNewImg(images.gen.find(e => e.style === styleImg.id && e.content === contentImg.id));
  }, [contentImg, styleImg]);

  return (
    <StyleLayout>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    <Grid item container xs={4} direction="column" className={layoutStyles.gridItem}>
                        <InputCard
                        card={contentImg}
                        title="Content Image"
                        type="content"
                        setCard={setContentImg}
                        openModal={openContentModal}
                        setOpenModal={setOpenContentModal}
                        />
                    </Grid>
                    <Grid item container xs={4} direction="column" className={layoutStyles.gridItem}>
                        <InputCard
                        card={styleImg}
                        title="Style Image"
                        type="style"
                        setCard={setStyleImg}
                        openModal={openStyleModal}
                        setOpenModal={setOpenStyleModal}
                        />
                    </Grid>
                    <Grid item container xs={4} direction="column" className={layoutStyles.gridItem}>
                        <OutputCard
                            title="New Image"
                            card={newImg}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </StyleLayout>
  );
}

export default StyleTransfer;