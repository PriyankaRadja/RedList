library(leaflet)
library(maps)
library(mapdata)
library(htmlwidgets)

sites <- read.csv("data/top3.csv")

bounds <- map('world', c('Colombia', 'Ecuador', 'Peru', 'Argentina', 'Suriname', 'Bolivia', 'Brazil', 'Guyana', 'Uruguay', 'Chile', 'Paraguay', 'Venezuela'), fill=TRUE, plot=FALSE)

map <- leaflet(data = sites) %>%
  setView(-78.123, 5.929, zoom = 5) %>% 
  
  addProviderTiles("CartoDB", group = "Map") %>%
  addProviderTiles("Esri.WorldImagery", group = "Terrain") %>%
  
  addMarkers(sites$LONG, sites$LAT, popup = paste0("<b> Ecoregion Code: </b>", sites$ECOREGION_CODE,"<br> <b> Ecoregion Name: </b>", sites$ECOREGION_NAME,"<br> <b> Area: </b>", sites$ECOREGION_AREA..Km2., " sq.km <br> <b> Total Species: </b>", sites$TOTAL_SPECIES, "<br> <b> Total Endangered Species: </b>", sites$COUNT.EN_CR_SPECIES.), group = "Sites") %>% 
  
  addScaleBar(position = "bottomleft") %>%
  
  addLayersControl(
  baseGroups = c("Map", "Terrain"),
  options = layersControlOptions(collapsed = FALSE)
  )

invisible(print(map)) 

#mapshot(map, file = "world.png")

saveWidget(map, file="forests.html", selfcontained=TRUE)
