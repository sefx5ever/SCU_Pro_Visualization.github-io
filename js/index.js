function change_cloud(to_change){
    if (to_change == 'left'){
        document.getElementById('section-cloud-1').src = "../Visualization/subCategory.html";
        document.getElementById('section-cloud-sub').textContent = '副類別';
    } else {
        document.getElementById('section-cloud-1').src = "../Visualization/mainCategory.html";
        document.getElementById('section-cloud-sub').textContent = '主類別';
    }
}

// let rate = [12,12,12,12,12,15,15,15,15,15,15,1,1,1,1];
let rate = [8,27,12,37,44,23,8,10,36,4,24,24,9,16,14];


for (let x = 1; x < 16; x++){
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    var gauge2= loadLiquidFillGauge("fillgauge"+String(x), rate[x-1], config1);
}