function clamp(min, max, value) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

function solution(video_len, pos, op_start, op_end, commands) {
    [video_len, pos, op_start, op_end] = [video_len, pos, op_start, op_end]
        .map(s => s.split(':').map(Number).reduce((a, b) => a * 60 + b));
    if (pos >= op_start && pos <= op_end) pos = op_end;
    for (const command of commands) {
        if (command === 'next') pos = clamp(0, video_len, pos + 10)
        if (command === 'prev') pos = clamp(0, video_len, pos - 10)
        if (pos >= op_start && pos <= op_end) pos = op_end;
    }
    return ("" + ~~(pos / 60)).padStart(2, 0) + ':' + ("" + (pos % 60)).padStart(2, 0);
}