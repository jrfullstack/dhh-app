import { ArtistaList } from '@/components/artistas';
import { MainLayout } from '@/components/layouts';
import { initialData } from '@/database/artistas';
import { Groups2Rounded } from '@mui/icons-material';
import { Box, Chip, Tooltip, Typography, IconButton } from '@mui/material';
import React from 'react'

const index = () => {
  return (
      <MainLayout
          title={"Artistas | DHH"}
          pageDescription={"Seccion de artistas"}>
          {/* <Typography>
                DominicanHipHop
            </Typography> */}
          <Typography variant="h1" sx={{ mb: 1 }}>
              <Box
                  component="span"
                  sx={{
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "center",
                  }}>
                  <Groups2Rounded
                      fontSize="large"
                      sx={{
                          mr: 2,
                          backgroundColor: "#DE260E",
                          border: "2px solid gray",
                          borderRadius: "8px",
                          padding: "3px",
                          color:'white'
                      }}
                  />
                  Todos los Artistas
              </Box>
          </Typography>

          <ArtistaList artistas={initialData.artistas as any} />
      </MainLayout>
  );
}

export default index