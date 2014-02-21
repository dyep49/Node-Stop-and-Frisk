library(foreign)
data<-read.spss("2012.por")
data<-as.data.frame(data)
race<-data$RACE
x<-data$XCOORD
y<-data$YCOORD
frisked<-data$FRISKED
searched<-data$SEARCHED
arrest<-data$ARSTMADE
summons<-data$SUMISSUE
date<-data$DATESTOP
mydata<-c(race, x, y, frisked, searched, arrest, summons, date)
write.csv(mydata,file="stop_and_frisk_2012.csv")