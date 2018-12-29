'use strict';

goog.provide('Blockly.Msg.lizard.zh-hans');

goog.require('Blockly.Msg');

MSG.catLeaf = "叶子";

MSG.leaf_description = "一个为你富有创造力的电子项目打造的，带有Cotex-M4主控和内置蓝牙的开发板";
//#################################################
// class Pin - control I/O pins
//#################################################
  Blockly.Msg.LEAF_PIN_OUTPUT          = "输入";
  Blockly.Msg.LEAF_PIN_INPUT           = "输出";
  Blockly.Msg.LEAF_PIN_OPEN_DRAIN      = "开漏";

  Blockly.Msg.LEAF_PIN_DIGITAL_PIN_TOOLTIP = "数字引脚编号";

  Blockly.Msg.LEAF_PIN_ANALOG_PIN_TOOLTIP  = "模拟引脚编号";

  Blockly.Msg.LEAF_PIN_DEVICE_PIN_TOOLTIP  = "内置设备";

  Blockly.Msg.LEAF_PIN_SERVO_PIN_TOOLTIP   = "舵机引脚编号";

  Blockly.Msg.LEAF_PIN_PULL_TITLE          = "上拉";
  Blockly.Msg.LEAF_PIN_PULL_TOOLTIP        = "输入的上拉/下拉/悬空";

  Blockly.Msg.LEAF_PIN_IRQ_TRIGGER_TITLE   = "中断触发";
  Blockly.Msg.LEAF_PIN_IRQ_TRIGGER_TOOLTIP = "中断触发";

  Blockly.Msg.LEAF_PIN_SET_VALUE_TITLE1    = "设置引脚";
  Blockly.Msg.LEAF_PIN_SET_VALUE_TITLE2    = "的值为";
  Blockly.Msg.LEAF_PIN_SET_VALUE_TOOLTIP   = "设置引脚的值为0/1";

  Blockly.Msg.LEAF_PIN_GET_VALUE_TITLE1    = "获取引脚";
  Blockly.Msg.LEAF_PIN_GET_VALUE_TITLE2    = "的值";
  Blockly.Msg.LEAF_PIN_GET_VALUE_TOOLTIP   = "获取引脚的值";

  Blockly.Msg.LEAF_PIN_ON_TITLE1    = "设置引脚";
  Blockly.Msg.LEAF_PIN_ON_TITLE2    = "打开";
  Blockly.Msg.LEAF_PIN_ON_TOOLTIP   = "设置引脚打开";

  Blockly.Msg.LEAF_PIN_OFF_TITLE1    = "设置引脚";
  Blockly.Msg.LEAF_PIN_OFF_TITLE2    = "关闭";
  Blockly.Msg.LEAF_PIN_OFF_TOOLTIP   = "设置引脚关闭";

  Blockly.Msg.LEAF_PIN_IRQ_TITLE1    = "配置一个中断";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE2    = "引脚";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE3    = "模式";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE4    = "上下拉";
  Blockly.Msg.LEAF_PIN_IRQ_TITLE5    = "执行";
  Blockly.Msg.LEAF_PIN_IRQ_TOOLTIP   = "There are a total of 22 interrupt lines. 16 of these can come from GPIO pins and the remaining 6 are from internal sources.\n\
        Create an ExtInt object:\n\
        pin is the pin on which to enable the interrupt (can be a pin object or any valid pin name).\n\
        mode can be one of: - ExtInt.IRQ_RISING - trigger on a rising edge; - ExtInt.IRQ_FALLING - trigger on a falling edge; - ExtInt.IRQ_RISING_FALLING - trigger on a rising or falling edge.\n\
        pull can be one of: - pyb.Pin.PULL_NONE - no pull up or down resistors; - pyb.Pin.PULL_UP - enable the pull-up resistor; - pyb.Pin.PULL_DOWN - enable the pull-down resistor.\n\
        callback is the function to call when the interrupt triggers. \n\
        The callback function must accept exactly 1 argument, which is the line that triggered the interrupt.";


//#################################################
// class ADC - analog to digital conversion
//#################################################
  Blockly.Msg.LEAF_ADC_READ_TITLE1  = "获取引脚";
  Blockly.Msg.LEAF_ADC_READ_TITLE2  = "的值";
  Blockly.Msg.LEAF_ADC_READ_TOOLTIP = "获取引脚的模拟值, 返回 0-1024"


//#################################################
// class DAC - digital to analog conversion
//#################################################
  Blockly.Msg.LEAF_DAC_WRITE_TITLE1 = "设置引脚";
  Blockly.Msg.LEAF_DAC_WRITE_TITLE2  = "的模拟值为";
  Blockly.Msg.LEAF_DAC_WRITE_TOOLTIP = "设置引脚的模拟值.\n\
       模拟值引脚在A4，A5. \n\
       模拟值的电压范围在 0 到 3.3V."


//#################################################
// class Servo  - 3-wire hobby servo driver
//#################################################
Blockly.Msg.LEAF_SERVO_GET_ANGLE_TITLE1        = "获取舵机"
Blockly.Msg.LEAF_SERVO_GET_ANGLE_TITLE2        = "的角度"
Blockly.Msg.LEAF_SERVO_GET_ANGLE_TOOLTIP       = "获取舵机的角度"

Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE1        = "设置舵机"
Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE2        = "的角度"
Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE3        = "time"
Blockly.Msg.LEAF_SERVO_SET_ANGLE_TOOLTIP       = "Sets the angle of the servo:\n\
     angle is the angle to move to in degrees.\n\
     time is the number of milliseconds to take to get to the specified angle. If omitted, then the servo moves as quickly as possible to its new position."

Blockly.Msg.LEAF_SERVO_GET_SPEED_TITLE1        = "获取舵机"
Blockly.Msg.LEAF_SERVO_GET_SPEED_TITLE2        = "的速度"
Blockly.Msg.LEAF_SERVO_GET_SPEED_TOOLTIP       = "获取舵机的速度"

Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE1        = "设置舵机"
Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE2        = "的速度"
Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE3        = "time"
Blockly.Msg.LEAF_SERVO_SET_SPEED_TOOLTIP       = "Sets the angle of the servo:\n\
     speed is the speed to change to, between -100 and 100.\n\
     time is the number of milliseconds to take to get to the specified speed. If omitted, then the servo accelerates as quickly as possible."

Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TITLE1  = "获取舵机"
Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TITLE2  = "的校准值"
Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TOOLTIP = "获取舵机的校准值"

Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE1  = "设置舵机的校准值"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE2  = "引脚"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE3  = "最小脉宽"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE4  = "最大脉宽"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE5  = "中心脉宽"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE6  = "90度的脉宽"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE7  = "pulse_speed_100"
Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TOOLTIP = "Sets the angle of the servo:\n\
      pulse_min is the minimum allowed pulse width.\n\
      pulse_max is the maximum allowed pulse width.\n\
      pulse_centre is the pulse width corresponding to the centre/zero position.\n\
      pulse_angle_90 is the pulse width corresponding to 90 degrees.\n\
      pulse_speed_100 is the pulse width corresponding to a speed of 100."

