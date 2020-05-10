// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var reactivemarkets = reactivemarkets || {};

/**
 * @const
 * @namespace
 */
reactivemarkets.papi = reactivemarkets.papi || {};

/**
 * @enum {number}
 */
reactivemarkets.papi.Body = {
  NONE: 0,
  FeedRequest: 1,
  FeedRequestAck: 2,
  FeedRequestReject: 3,
  MDSnapshotL2: 4,
  PublicTrade: 5,
  SessionStatus: 6
};

/**
 * @enum {string}
 */
reactivemarkets.papi.BodyName = {
  '0': 'NONE',
  '1': 'FeedRequest',
  '2': 'FeedRequestAck',
  '3': 'FeedRequestReject',
  '4': 'MDSnapshotL2',
  '5': 'PublicTrade',
  '6': 'SessionStatus'
};

/**
 * @constructor
 */
reactivemarkets.papi.Message = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {reactivemarkets.papi.Message}
 */
reactivemarkets.papi.Message.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {reactivemarkets.papi.Message=} obj
 * @returns {reactivemarkets.papi.Message}
 */
reactivemarkets.papi.Message.getRootAsMessage = function(bb, obj) {
  return (obj || new reactivemarkets.papi.Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {reactivemarkets.papi.Message=} obj
 * @returns {reactivemarkets.papi.Message}
 */
reactivemarkets.papi.Message.getSizePrefixedRootAsMessage = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new reactivemarkets.papi.Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {boolean}
 */
reactivemarkets.papi.Message.bufferHasIdentifier = function(bb) {
  return bb.__has_identifier('RMF1');
};

/**
 * @returns {flatbuffers.Long}
 */
reactivemarkets.papi.Message.prototype.tts = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {reactivemarkets.papi.Body}
 */
reactivemarkets.papi.Message.prototype.bodyType = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {reactivemarkets.papi.Body} */ (this.bb.readUint8(this.bb_pos + offset)) : reactivemarkets.papi.Body.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
reactivemarkets.papi.Message.prototype.body = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
reactivemarkets.papi.Message.startMessage = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} tts
 */
reactivemarkets.papi.Message.addTts = function(builder, tts) {
  builder.addFieldInt64(0, tts, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {reactivemarkets.papi.Body} bodyType
 */
reactivemarkets.papi.Message.addBodyType = function(builder, bodyType) {
  builder.addFieldInt8(1, bodyType, reactivemarkets.papi.Body.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} bodyOffset
 */
reactivemarkets.papi.Message.addBody = function(builder, bodyOffset) {
  builder.addFieldOffset(2, bodyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
reactivemarkets.papi.Message.endMessage = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
reactivemarkets.papi.Message.finishMessageBuffer = function(builder, offset) {
  builder.finish(offset, 'RMF1');
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
reactivemarkets.papi.Message.finishSizePrefixedMessageBuffer = function(builder, offset) {
  builder.finish(offset, 'RMF1', true);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} tts
 * @param {reactivemarkets.papi.Body} bodyType
 * @param {flatbuffers.Offset} bodyOffset
 * @returns {flatbuffers.Offset}
 */
reactivemarkets.papi.Message.createMessage = function(builder, tts, bodyType, bodyOffset) {
  reactivemarkets.papi.Message.startMessage(builder);
  reactivemarkets.papi.Message.addTts(builder, tts);
  reactivemarkets.papi.Message.addBodyType(builder, bodyType);
  reactivemarkets.papi.Message.addBody(builder, bodyOffset);
  return reactivemarkets.papi.Message.endMessage(builder);
}

// Exports for Node.js and RequireJS
this.reactivemarkets = reactivemarkets;
