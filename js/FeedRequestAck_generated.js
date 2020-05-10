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
 * @constructor
 */
reactivemarkets.papi.FeedRequestAck = function() {
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
 * @returns {reactivemarkets.papi.FeedRequestAck}
 */
reactivemarkets.papi.FeedRequestAck.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {reactivemarkets.papi.FeedRequestAck=} obj
 * @returns {reactivemarkets.papi.FeedRequestAck}
 */
reactivemarkets.papi.FeedRequestAck.getRootAsFeedRequestAck = function(bb, obj) {
  return (obj || new reactivemarkets.papi.FeedRequestAck).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {reactivemarkets.papi.FeedRequestAck=} obj
 * @returns {reactivemarkets.papi.FeedRequestAck}
 */
reactivemarkets.papi.FeedRequestAck.getSizePrefixedRootAsFeedRequestAck = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new reactivemarkets.papi.FeedRequestAck).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
reactivemarkets.papi.FeedRequestAck.prototype.reqId = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
reactivemarkets.papi.FeedRequestAck.prototype.feedId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
reactivemarkets.papi.FeedRequestAck.startFeedRequestAck = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} reqIdOffset
 */
reactivemarkets.papi.FeedRequestAck.addReqId = function(builder, reqIdOffset) {
  builder.addFieldOffset(0, reqIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} feedId
 */
reactivemarkets.papi.FeedRequestAck.addFeedId = function(builder, feedId) {
  builder.addFieldInt32(1, feedId, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
reactivemarkets.papi.FeedRequestAck.endFeedRequestAck = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} reqIdOffset
 * @param {number} feedId
 * @returns {flatbuffers.Offset}
 */
reactivemarkets.papi.FeedRequestAck.createFeedRequestAck = function(builder, reqIdOffset, feedId) {
  reactivemarkets.papi.FeedRequestAck.startFeedRequestAck(builder);
  reactivemarkets.papi.FeedRequestAck.addReqId(builder, reqIdOffset);
  reactivemarkets.papi.FeedRequestAck.addFeedId(builder, feedId);
  return reactivemarkets.papi.FeedRequestAck.endFeedRequestAck(builder);
}

// Exports for Node.js and RequireJS
this.reactivemarkets = reactivemarkets;
