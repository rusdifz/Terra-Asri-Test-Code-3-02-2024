function find_common_slot(meetings) {
    // Combine all meetings into a single array
    const combinedMeetings = meetings.flat();
  
    // Sort all meetings by start time
    const sortedMeetings = combinedMeetings.sort((a, b) => a[0] - b[0]);
  
    let commonSlotStart = -1;
    let commonSlotEnd = -1;
  
    for (let i = 0; i < sortedMeetings.length - 2; i++) {
      const diplomat1 = sortedMeetings[i];
      const diplomat2 = sortedMeetings[i + 1];
      const diplomat3 = sortedMeetings[i + 2];
  
      // Check for overlap among the three diplomats
      const overlapStart = Math.max(diplomat1[0], diplomat2[0], diplomat3[0]);
      const overlapEnd = Math.min(diplomat1[1], diplomat2[1], diplomat3[1]);
  
      // If there is an overlap, update the common slot
      if (overlapStart < overlapEnd) {
        const overlapDuration = overlapEnd - overlapStart;
        if (commonSlotStart === -1 || overlapDuration < commonSlotEnd - commonSlotStart) {
          commonSlotStart = overlapStart;
          commonSlotEnd = overlapEnd;
        }
      }
    }
  
    // Check if a common slot was found
    if (commonSlotStart !== -1 && commonSlotEnd !== -1) {
      return { start: commonSlotStart, end: commonSlotEnd };
    } else {
      return "No suitable common time slot found.";
    }
}
  
// // Example usage with meetings as input
// const meetings = [
//     [[9,12],[14,16]],
//     [[10,12],[15,17]],
//     [[11,13],[16,18]],
//     [[9,11],[19,20]]
// ]
  
// const commonSlot = find_common_slot(meetings);

// console.log(commonSlot);

module.exports = {
  find_common_slot
};