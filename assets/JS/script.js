$(document).ready(function() {

  const theDay =$("#currentDay");
  theDay.text(dayjs().format("ddd, DD MMM h:mm a"));

  const currentHour = dayjs().hour();
  console.log("Current Hour:", currentHour);
  
  const elements = $(".time-block");

elements.each(function() {

  const hour =parseInt(this.id.split('-')[1]);

  if (hour < currentHour){
    $(this).addClass("past")
  } else if (hour === currentHour){
    $(this).addClass("present")
  } else {
    $(this).addClass("future")
  }
});

$(".saveBtn").on("click", function() {
  const blockId =$(this).closest(".time-block").attr("id");
  const userInput =$(this).siblings(".description").val();
  const localStorageKey = `time-block-${blockId}`;

  localStorage.setItem(localStorageKey, userInput);

  const descript =$(".description");

  localStorage.getItem(localStorageKey).descript.text
})



});
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?