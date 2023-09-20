export function formatTimestamp(created_at: string) {
  const date = new Date(created_at);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${ampm} ${formattedHours}:${formattedMinutes}`;
}

export function sortChatDataByCreatedAt(data: any) {
  return data.sort((a: { created_at: string }, b: { created_at: string }) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });
}
