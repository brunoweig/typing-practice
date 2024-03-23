Domain
---------------

Scoreboard
- failure
- success
+ addSuccess
+ addFailure
+ getSuccess
+ getFailures
+ getTrials

Countdown
- currentTime: DateTime
- finishTime: DateTime
- onFinishFn
- times[]
+ constructor(initial: DateTime)
+ start(finishTime: DateTime)
+ tick
+ getElapsedTimeInMs
+ getTotalTime
+ getTimes
+ onFinish

Terms
- words
+ isEqual
+ next
+ get
+ count

Records
+ constructor(Scoreboard, Terms, Countdown)
+ save


ValueObject
---------------

DateTime
- date: Date
+ constructor(date: Date)
+ getUTC(): number
+ diffInMilliseconds(): number
+ diffInSeconds(): number

DateTimeInterval
- milliseconds: number
- seconds: number
- minutes: number
- hours: number
+ getMilliseconds