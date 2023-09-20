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
  let blockId =$(this).closest(".time-block").attr("id");
  const userInput =$(this).siblings(".description").val();
  let localStorageKey = `time-block-${blockId}`;

  localStorage.setItem(localStorageKey, userInput);

  const storedInput = localStorage.getItem(localStorageKey);

  $(this).siblings(".description").val(storedInput);
});

elements.each(function() {
  let blockId =$(this).attr("id");
  let localStorageKey = `time-block-${blockId}`;
  const storedInput = localStorage.getItem(localStorageKey);

  $(this).find(".description").val(storedInput);
  });
});

// left TODO:
// Make it so that when the day changes it does not pull the same information from the day before. Saving and pausing on coding now to see if this happens naturally or if it needs to be coded in. Assuming it will,