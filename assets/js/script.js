feather.replace({
    width: '1em',
    height: '1em'
});

function taskCounter(){
    $(".block").each(function(){
        $(this).find(".block__title__count").text($(this).find(".card").length);
    });
}

$(function(){
    taskCounter();
});

let containers = [
    document.querySelector(".draggable"),
    document.querySelector(".block__body--info"),
    document.querySelector(".block__body--warning"),
    document.querySelector(".block__body--success")
];


dragula(containers, {
    // isContainer: (el) => {
    //     return el.classList.contains('draggable');
    // },
   
    accepts: function (el, target, source, sibling) {
        // accept drags only if the drop target is the same
        // as the source container the element came from
        return target !== document.querySelector(".draggable");
    },
    revertOnSpill: true,
    mirrorContainer: document.body, 
  }).on('drop', function (el) {
    taskCounter();
    if(el.parentElement.classList.contains("row")){
        el.classList.add("col-lg-4");
    }else{
        el.classList.remove("col-lg-4");
    }
  });