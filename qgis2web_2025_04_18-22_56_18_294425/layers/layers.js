var wms_layers = [];

var lyr_Overlayimmagine_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overlay immagine<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Overlayimmagine_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1460466.306056, 5175584.102121, 1504227.809355, 5205972.362687]
        })
    });
var format_ZONARISERVAINTEGRALEA_1 = new ol.format.GeoJSON();
var features_ZONARISERVAINTEGRALEA_1 = format_ZONARISERVAINTEGRALEA_1.readFeatures(json_ZONARISERVAINTEGRALEA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONARISERVAINTEGRALEA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONARISERVAINTEGRALEA_1.addFeatures(features_ZONARISERVAINTEGRALEA_1);
var lyr_ZONARISERVAINTEGRALEA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONARISERVAINTEGRALEA_1, 
                style: style_ZONARISERVAINTEGRALEA_1,
                popuplayertitle: 'ZONA RISERVA INTEGRALE A',
                interactive: true,
                title: '<img src="styles/legend/ZONARISERVAINTEGRALEA_1.png" /> ZONA RISERVA INTEGRALE A'
            });
var format_ZONARISERVAGENERALEB_2 = new ol.format.GeoJSON();
var features_ZONARISERVAGENERALEB_2 = format_ZONARISERVAGENERALEB_2.readFeatures(json_ZONARISERVAGENERALEB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONARISERVAGENERALEB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONARISERVAGENERALEB_2.addFeatures(features_ZONARISERVAGENERALEB_2);
var lyr_ZONARISERVAGENERALEB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONARISERVAGENERALEB_2, 
                style: style_ZONARISERVAGENERALEB_2,
                popuplayertitle: 'ZONA RISERVA GENERALE B',
                interactive: true,
                title: '<img src="styles/legend/ZONARISERVAGENERALEB_2.png" /> ZONA RISERVA GENERALE B'
            });
var format_AREADIPROTEZIONECD_3 = new ol.format.GeoJSON();
var features_AREADIPROTEZIONECD_3 = format_AREADIPROTEZIONECD_3.readFeatures(json_AREADIPROTEZIONECD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREADIPROTEZIONECD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREADIPROTEZIONECD_3.addFeatures(features_AREADIPROTEZIONECD_3);
var lyr_AREADIPROTEZIONECD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREADIPROTEZIONECD_3, 
                style: style_AREADIPROTEZIONECD_3,
                popuplayertitle: 'AREA DI PROTEZIONE C - D',
                interactive: true,
                title: '<img src="styles/legend/AREADIPROTEZIONECD_3.png" /> AREA DI PROTEZIONE C - D'
            });

lyr_Overlayimmagine_0.setVisible(true);lyr_ZONARISERVAINTEGRALEA_1.setVisible(true);lyr_ZONARISERVAGENERALEB_2.setVisible(true);lyr_AREADIPROTEZIONECD_3.setVisible(true);
var layersList = [lyr_Overlayimmagine_0,lyr_ZONARISERVAINTEGRALEA_1,lyr_ZONARISERVAGENERALEB_2,lyr_AREADIPROTEZIONECD_3];
lyr_ZONARISERVAINTEGRALEA_1.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Descr_1': 'Descr_1', 'area': 'area', });
lyr_ZONARISERVAGENERALEB_2.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Descr_1': 'Descr_1', 'area': 'area', });
lyr_AREADIPROTEZIONECD_3.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Descr_1': 'Descr_1', 'area': 'area', });
lyr_ZONARISERVAINTEGRALEA_1.set('fieldImages', {'fid': 'Range', 'Zona': 'TextEdit', 'Descr_1': 'TextEdit', 'area': 'TextEdit', });
lyr_ZONARISERVAGENERALEB_2.set('fieldImages', {'fid': '', 'Zona': '', 'Descr_1': '', 'area': '', });
lyr_AREADIPROTEZIONECD_3.set('fieldImages', {'fid': 'Range', 'Zona': 'TextEdit', 'Descr_1': 'TextEdit', 'area': 'TextEdit', });
lyr_ZONARISERVAINTEGRALEA_1.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'header label - always visible', 'Descr_1': 'inline label - always visible', 'area': 'header label - always visible', });
lyr_ZONARISERVAGENERALEB_2.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'header label - always visible', 'Descr_1': 'header label - visible with data', 'area': 'header label - always visible', });
lyr_AREADIPROTEZIONECD_3.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'header label - always visible', 'Descr_1': 'hidden field', 'area': 'header label - always visible', });
lyr_AREADIPROTEZIONECD_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});