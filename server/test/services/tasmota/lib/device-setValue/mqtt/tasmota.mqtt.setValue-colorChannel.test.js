const sinon = require('sinon');

const { fake, assert } = sinon;
const TasmotaHandler = require('../../../../../../services/tasmota/lib');

const mqttService = {
  device: {
    publish: fake.resolves(null),
  },
};
const gladys = {};
const serviceId = 'service-uuid-random';

describe('Tasmota - MQTT - setValue - Color', () => {
  let tasmotaHandler;

  beforeEach(() => {
    tasmotaHandler = new TasmotaHandler(gladys, serviceId);
    tasmotaHandler.protocols.mqtt.mqttService = mqttService;
    sinon.reset();
  });

  it('Set number value', () => {
    const device = {
      params: [],
    };
    const feature = {
      external_id: 'tasmota:tasmota-device-topic:Channel',
    };
    const value = 1243700;

    tasmotaHandler.setValue(device, feature, value);

    assert.calledWith(mqttService.device.publish, 'cmnd/tasmota-device-topic/Channel', '18,250,52');
  });
});
